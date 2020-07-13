import Document, {Head, Main, NextScript} from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <link rel="stylesheet" href={"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"}
                      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                      crossOrigin="anonymous"/>
            </Head>
            <body>
            <div id="root">
                <Main/>
                <NextScript/>
            </div>
            </body>
            </html>
        );
    }
}