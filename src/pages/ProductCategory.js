import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { X } from 'heroicons-react';

class ProductCategory extends React.Component {

    constructor(props) {
        super(props);
        this.state = { model: false, tempItem: {} };
    }

    authenticate() {
        return new Promise(resolve => setTimeout(resolve, 2000))
    }

    getItem(item) {
        this.setState({
            model: true,
            tempItem: item
        })
    }

    async componentDidMount() {

        await this.authenticate().then(() => {
            const ele = document.getElementById('progress-indicator')
            if (ele) {
                // fade out
                ele.classList.add('available')
                setTimeout(() => {
                    // remove from DOM
                    ele.outerHTML = ''
                }, 2000)
            }
        })
    }

    render() {
        let data = {
            name: "",
            products: [
                {
                    id: 1,
                    code: 'WE-5264',
                    imgSrc: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5264-scaled.jpg',
                    imgSrc2: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5264-2-scaled.jpg',
                    imgSrc3: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5264-1-scaled.jpg',
                    imgSrc4: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5264-3.jpg'
                },
                {
                    id: 2,
                    code: 'WE-5318',
                    imgSrc: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5318-scaled.jpg',
                    imgSrc2: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5318-2-scaled.jpg',
                    imgSrc3: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5318-1-scaled.jpg',
                    imgSrc4: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5318-3-100x160.jpg'
                },
                {
                    id: 3,
                    code: 'WE-5253',
                    imgSrc: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5253-scaled.jpg',
                    imgSrc2: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5253-2-scaled.jpg',
                    imgSrc3: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5253-1-scaled.jpg',
                    imgSrc4: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5253-3-100x186.jpg'
                },
                {
                    id: 4,
                    code: 'WE-5287',
                    imgSrc: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5287-scaled.jpg',
                    imgSrc2: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5287-2-scaled.jpg',
                    imgSrc3: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5287-1-scaled.jpg',
                    imgSrc4: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5287-3-100x164.jpg'
                },
                {
                    id: 5,
                    code: 'WE-5320',
                    imgSrc: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5320-scaled.jpg',
                    imgSrc2: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5320-2.jpg',
                    imgSrc3: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5320-1-scaled.jpg',
                    imgSrc4: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5320-3-100x180.jpg'
                },
                {
                    id: 6,
                    code: 'WE-5313',
                    imgSrc: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5313.jpg',
                    imgSrc2: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5313-2-scaled.jpg',
                    imgSrc3: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5313-1-scaled.jpg',
                    imgSrc4: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5313-3-100x176.jpg'
                },
                {
                    id: 6,
                    code: 'WE-5255',
                    imgSrc: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5255-scaled.jpg',
                    imgSrc2: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5255-2-scaled.jpg',
                    imgSrc3: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5255-1-scaled.jpg',
                    imgSrc4: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5255-3-100x140.jpg'
                },
                {
                    id: 6,
                    code: 'WE-5321',
                    imgSrc: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5321-scaled.jpg',
                    imgSrc2: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5321-2-scaled.jpg',
                    imgSrc3: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5321-1-scaled.jpg',
                    imgSrc4: 'http://wall-empire.com/demo/wp-content/uploads/2020/12/5321-3-100x131.jpg'
                }
            ]
        }
        return (
            <div>
                <Header />
                <div className={this.state.model ? "model open" : "model"}>
                    <LazyLoadImage layout="fill" src={this.state.tempItem.imgSrc} />
                    <X onClick={() => { this.setState({ model: false }) }} />
                </div>
                <div className='pt-5 pl-7 pr-7'>
                    <div className='grid md:place-items-center'>
                        <div className='md:w-1/2 text-center mb-10 align-middle'>
                            <h1 className='text-xl font-bold p-5'>Kool Kids</h1>
                            <h2 className='text-gray-500'>A futuristic dream of a wallpaper with kool kids collection. Perfect when wanting to create a fantasy world of your own, to boost creativity and a playful mind.
                                very wallpaper in our kool Kids gallery will create exciting kids wallpaper ideas for your kids bedroom.</h2>
                        </div>
                    </div>
                    <div className='gallary'>
                        {
                            data.products.map((item, index) => {
                                return (
                                    <div className='pics' key={index} onClick={() => this.getItem(item)}>
                                        <LazyLoadImage layout="fill" src={item.imgSrc} />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ProductCategory
