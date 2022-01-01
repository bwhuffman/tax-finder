import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="bg-gray-900 bg-hero-pattern bg-auto bg-no-repeat bg-left-top">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
