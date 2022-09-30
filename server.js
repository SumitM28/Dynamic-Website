const express = require('express');
const app = express()
const ejs = require('ejs');
const mongoose = require('mongoose');
const port = process.env.PORT || 4500;

// use static file
app.use(express.static('public'));

// connect with database
const dbUrl = 'mongodb://localhost:27017/Portfolio'
mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connected to database myDb ;)')
})

// import the model of navbar
const navbarModel = require('./src/models/details')
// insert the data in the monogodb
// const navbar=new navbarModel({
//     brandName: 'Sumit',
//     brandIcon: 'https://cdn-icons-png.flaticon.com/512/5697/5697524.png',
//     links: [
//         {
//             lable: 'Home',
//             url: '/'

//         },
//         {
//             lable: 'Services',
//             url: '/services'

//         },
//         {
//             lable: 'About',
//             url: '/about'

//         },
//         {
//             lable: 'Contact us',
//             url: '/contact'

//         },
//         {
//             lable: 'Testimonials',
//             url: '/testimonials'

//         },

//     ]
// })
// navbar.save()
// .then(()=>{
//     console.log('data has been stored')
// })
// .catch(err=>{
//     console.log(err)
// })

// import the model of navbar
const slidersModel = require('./src/models/slider');
// insert the data in the mongodb
// const sliders=new slidersModel({
//     slider: [
//         {
//             sliderLable: "First slide label",
//             sliderPlaceholder: "Some representative placeholder content for the first slide.",
//             sliderImage: "https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
//         },
//         {
//             sliderLable: "Second slide label",
//             sliderPlaceholder: "Some representative placeholder content for the second slide.",
//             sliderImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
//         },
//         {
//             sliderLable: "Third slide label",
//             sliderPlaceholder: "Some representative placeholder content for the third slide.",
//             sliderImage: "https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"
//         },
//     ]
// })
// sliders.save()
//     .then(()=>{
//         console.log('slider image has been stored')
//     })
//     .catch(err=>{
//         console.log(err)
//     })

// import the model of the services
const servicesModel = require('./src/models/services');
// insert the data in the mongodb
// const services = new servicesModel({
//     services: [
//         {
//             icon: 'uil uil-window',
//             title: 'Responsive Design',
//             subtitle: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ad harum perferendis?',
//             checkLink: 'https://www.google.com/',
//             supportLink: 'https://www.linkedin.com/feed/'
//         },
//         {
//             icon: 'uil uil-channel',
//             title: 'UI-UX Design',
//             subtitle: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ad harum perferendis?',
//             checkLink: 'https://www.google.com/',
//             supportLink: 'https://www.linkedin.com/feed/'
//         },
//         {
//             icon: 'uil uil-channel',
//             title: 'Backend Design',
//             subtitle: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ad harum perferendis?',
//             checkLink: 'https://www.google.com/',
//             supportLink: 'https://www.linkedin.com/feed/'
//         },
//     ]
// })
// services.save()
//     .then(()=>{
//         console.log('services data has been stored in the database');
//     })
//     .catch(err=>{
//         console.log(err)
//     })

// imprt tge about model
const aboutModel=require('./src/models/about');
// const about=new aboutModel({
//     aboutImage:'/img/about-img.jpg',
//     aboutDetails:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia debitis amet cumque vel laudantium est modi blanditiis nesciunt sapiente a harum iusto consequuntur quam, iste perspiciatis omnis ad. Vero dolorem ipsam molestias rerum sapiente dolorum commodi voluptas ullam ab adipisci hic nobis esse pariatur exercitationem accusamus nesciunt libero ipsum, eaque maiores maxime architecto voluptatem? Exercitationem dolore, error autem eos reiciendis maxime iure labore. Fugit ad placeat quaerat corporis error deserunt! Quae quisquam fugiat, ducimus accusantium fuga dignissimos hic praesentium neque numquam, placeat voluptatum necessitatibus ipsam distinctio! Vel, obcaecati! Ea, veniam eum, perspiciatis nostrum architecto magnam, voluptatem quaerat ipsa voluptatibus facilis iste illum deleniti necessitatibus obcaecati aspernatur possimus impedit ullam! Sunt, deleniti possimus et animi provident voluptates molestias eligendi iure sint nam aspernatur molestiae? Eius totam ipsa quo hic porro non quia laudantium cumque explicabo officiis eaque esse harum dolores sapiente aliquid quae delectus, a quibusdam aut at id architecto qui.'
// })
// about.save()
//     .then(()=>{
//             console.log('about data has been stored in the db');
//         })
//         .catch(err=>{
//             console.log(err)
//         })


// main routes
const routes = require('./src/routes/main')

// contact form routes
const contactRoute=require('./src/routes/contact');


// use app the main routes
app.use(routes)
app.use(contactRoute)
// template engine
app.set('view engine', 'ejs')


app.listen(port, () => {
    console.log(`Server has been running on the port ${port}`)
})