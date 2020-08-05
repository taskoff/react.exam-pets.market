const express = require('express');
const router = express.Router();
const {getUserStatus} = require('../controllers/auth');
const {getPets, sortPlays} = require('../controllers/pet');
const { route } = require('./play');


        router.get('/dog', async (req, res)=>{
        //    const dogs = await getPets('dog')
       
            res.send([
                {
                    id: 1,
                    path: 'https://pngimg.com/uploads/dog/dog_PNG50348.png'
                },
                {
                    id: 2,
                    path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8YWWwVtF1o9YvUxtfDn2I3V6S491tRwqjo-Na7q3jnagjI_V&s'
                },
                {
                    id: 3,
                    path: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*'
                },
                {
                    id: 4,
                    path: 'https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=064680b85e72644d9cc2e69e2763c541'
                },
                {
                    id: 5,
                    path: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg?resize=750px:*'
                }
            ])
        })

        router.get('/cat', async (req, res)=>{
            //    const dogs = await getPets('dog')
           
                res.send([
                    {
                        id: 1,
                        path: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpghttps://pngimg.com/uploads/dog/dog_PNG50348.png'
                    },
                    {
                        id: 2,
                        path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM8YWWwVtF1o9YvUxtfDn2I3V6S491tRwqjo-Na7q3jnagjI_V&s'
                    },
                    {
                        id: 3,
                        path: 'https://cdnuploads.aa.com.tr/uploads/Contents/2020/05/14/thumbs_b_c_88bedbc66bb57f0e884555e8250ae5f9.jpg?v=140708'
                    },
                    {
                        id: 4,
                        path: 'https://ichef.bbci.co.uk/news/410/cpsprodpb/AAE7/production/_111515734_gettyimages-1208779325.jpg'
                    },
                    {
                        id: 5,
                        path: 'https://cdn.mos.cms.futurecdn.net/VSy6kJDNq2pSXsCzb6cvYF.jpg'
                    }
                ])
            })

module.exports = router;