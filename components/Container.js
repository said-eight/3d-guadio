
import Head from 'next/head'

const Container =(props) => (
    <div>
         <Head>
         <link rel="stylesheet" href="style.css" />
         </Head>
            <div className="container">
                {props.children}
            </div>
    </div>
)

export default Container