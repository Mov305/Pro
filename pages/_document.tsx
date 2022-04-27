import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {



  render() {
    return (
      <Html>
        <Head>
        <link rel="icon" href="/pr.svg" />
        </Head>

        <body className=' bg-gradient-to-br from-[#3a3a55] to-[#12131C] bg-no-repeat bg-fixed'>

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
