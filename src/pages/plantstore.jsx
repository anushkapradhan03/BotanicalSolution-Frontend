import Breadcrumb from '../components/breadcrumbs/breadcrumb'


export default function About() {
    return (
        <>
            <Breadcrumb >
                <div className="page-header d-flex align-items-center" >
                    <div className="container position-relative">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6 text-center">
                                {/* <h2>Plant Store</h2>
                                <p>Store under construction coming soon</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Breadcrumb>

            {/* <section id="plant-store" className="plant-store"> */}
                <div className="container" data-aos="fade-up">
                    <div className="row gy-4 justify-content-center">
                        <h2 className='text-center'>Coming Soon</h2>
                        <p>We&apos;re excited to announce that our web store is currently undergoing construction to bring you an enhanced shopping experience. We apologize for any inconvenience caused during this period. Rest assured, we're working diligently to complete the updates and will be back soon to serve you better.</p>
                    </div>
                </div>
            {/* </section> */}

        </>
    )
}