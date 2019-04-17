import React from 'react';

// @ts-ignore
import Repl from '../../components/repl'

export default function() {
  return <div>
      <h1>Derive Deposit Adddress</h1>
      <p>
        Sometimes you'll want to programatically generate deposit addresses. Importantly deposit addresses can be generated completely offline. While it's unfortunately not standardized like bip32 it's a pretty straight forward process (and in-fact simpler than bip32).
      </p>

      <h2>The fundingPublicKey</h2>
      <p>
        So the first thing we need is the <code>fundingPublicKey</code>, this is the servers public key. Our goal is to send the bitcoin in such a way that it can be spent by spent by the server (using the corresponding private key) but also in a way that the server can know <em>who</em> was responsible for sending the bitcoin. The <code>fundingPublicKey</code> is just a constant, which is available from the hookedin-lib (if you choose to use it)
      </p>
      <Repl>
        hi.Params.fundingPublicKey.toPOD()
      </Repl>
      <p>Or more standardly, in compressed format:</p>
      <Repl>
        hi.Buffutils.toHex(hi.Params.fundingPublicKey.buffer)
      </Repl>

      <h2>Our Address Generator</h2>
      <p>
        Next we're going to want to generate a (secp256k1) keypair to use as the basis for generating all our deposit addresses. This will function as the spiritual
        equivalent to an <code>xpub</code> in bip32. The hookedin wallet exposes its <em>address generator</em> public key, so it makes it easy to generate (and check) you're generating compatible addresses. 
      </p>
      <p>
        In this example we will be using the address generator (public key) <code>pubhi1q0jcjekqlgfjw9t03c2zrknug22jnacrfvs87fvf2s4ug3dkv68uvdv5y3h</code>, which in compressed format is:
      </p>
      <Repl>{
`const str = "pubhi1q0jcjekqlgfjw9t03c2zrknug22jnacrfvs87fvf2s4ug3dkv68uvdv5y3h";
const addressGenerator = hi.PublicKey.fromPOD(str);
hi.Buffutils.toHex(addressGenerator.buffer);` }
      </Repl>
      <p>
        Note: You don't need the private key of the <code>Address Generator</code> to generate deposits addresses. But without it, you'll be unable to claim the funds deposited to it. So you probably want to make sure you have it safely backed up.
      </p>

      <h2>Deriving from the Address Generator</h2>
      <p>
        We now want to offset the <code>Address Generator</code> public key by an <code>index</code>. The index represents which number deposit address we're generating. The most obvious way of deriving from the <code>Address Generator</code> would be using a simple ECC addition <code>addressGenerator + index*G</code>. This would work perfectly fine, but it has some very undesirable properties (namely someone can use the result of the derivation to derive all your deposit addresses). So we want an operator more akin to:  <code>addressGenerator + hash(concat(index, addressGenerator))*G</code>.
      </p>
      <p>
        This functionality is packaged up in the hookedin library as <code>.derive</code> function on a PublicKey. (TODO: link to impl detail). This works on arbitrary sized integers (and buffers). You can even try really big numbers like: <code>1234567890000000000000000000000n</code>  
      </p>
      <p>
        So to derive our sample public key with the index 0 we get:
      </p>
      <Repl>{
`const index = 0;
const str = "pubhi1q0jcjekqlgfjw9t03c2zrknug22jnacrfvs87fvf2s4ug3dkv68uvdv5y3h";
const addressGenerator = hi.PublicKey.fromPOD(str);
const derivedPublicKey = addressGenerator.derive(index);
derivedPublicKey.toPOD();`
        }</Repl>
        <h3>Generating the final address</h3>
        <p>
          What need to convert our <code>derivedPublicKey</code> into a scalar, so we can add it to <code>fundingPublicKey</code>. For this we're going to use: <code>hmacsha256('tweak', derivedPublicKey)</code> then multiply it by the eliptic curve generator <code>G</code> and add it fundingPublicKey. With the resultant public key, we can convert it to a bitcoin (native segwit) address in the usual way (sha256 it, then rmd160 it, prepend 0 and convert to bech32). hookedin-lib provides convience functions for these operations. ECC addition is the <code>.tweak</code> method on a public key, and <code>.toBitcoinAddress()</code> will turn it into a bitcoin address (string). So putting everything together:
        </p>
        <Repl>{
 `const index = 0;
const str = "pubhi1q0jcjekqlgfjw9t03c2zrknug22jnacrfvs87fvf2s4ug3dkv68uvdv5y3h";

const addressGenerator = hi.PublicKey.fromPOD(str);
const derivedPublicKey = addressGenerator.derive(index);

const tweakBytes = hi.Hash.fromMessage('tweak', derivedPublicKey.buffer).buffer;
const tweakBy = hi.PrivateKey.fromBytes(tweakBytes).toPublicKey();

const finalPubKey = hi.Params.fundingPublicKey.tweak(tweakBy);
finalPubKey.toBitcoinAddress();`      }</Repl>
   <p>Remember you can edit the code (and run). So try increasing the index, and you'll get different addresses.</p>

    </div>
}