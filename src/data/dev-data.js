let projects = [
    {   
        'name': 'Trivia App',
        'category': 'development',
        'tools': ['react', 'js', 'bootstrap'],
        'subcategory': ['Front-End Development'],
        'logotype':'../../assets/dev/Trivia/trivia-logotype.svg',
        'cover': '../../assets/dev/Trivia/trivia-Cover.png',
        'id': '/development/trivia-app',
        'textColor': '#7947E8',
        'mainColor': '#EB628C',
        'accentColor': '#EB628C',
        'backgroundColor': '#f7f7f7',
        'logotypeWidth': '210',
        'content': [
            {
                'type': 'text',
                'header': 'Background',
                'text': 'In a web development course, I was tasked with creating a web app using an API and backend to store user data. My group project partner and I decided to use a public trivia API.',
                'emphasis': false,
                'align': 'left',
            },
            {
                'type': 'text',
                'header': 'Functionality',
                'text': 'The application pulls trivia questions from the API for users to practice their trivia skills. Users can choose from different categories, levels of difficulty, and types of questions. They can save questions that they enjoy to their account page and edit their stored user information.',
                'emphasis': false,
                'align': 'left',
            },
            {
                'type': 'text',
                'header': 'Implementation',
                'text': 'We implemented the front end using React framework and Bootstrap for basic styling. I then further customized the styles by adding my own custom CSS. For the back end, we used Firebase to store all our user information and saved questions.',
                'emphasis': false,
                'align': 'left',
            },
            {
                'type': 'link',
                'header': 'View live application',
                'subheader': '',
                'image': '../../assets/dev/Trivia/trivia-app-link.png',
                'width': '100%',
                'link': 'https://trivia426.web.app/',
                'text': 'Check out the live project here.'
            },
            {
                'type': 'link',
                'header': 'View application on Github',
                'subheader': '',
                'image': '../../assets/dev/github-application.svg',
                'width': '100%',
                'link': 'https://github.com/426final/trivia',
                'text': 'Check out my code!'
            }
           
        ]
    },
    {   
        'name': 'COVID-19 U.S.',
        'category': 'development',
        'tools': ['react', 'js', 'bootstrap', 'node'],
        'subcategory': ['Front-End Development', 'Back-End Development'],
        'logotype':'../../assets/dev/Covid/covid-logotype.svg',
        'cover': '../../assets/dev/Covid/covid-cover.svg',
        'id': '/development/covid19-us',
        'textColor': 'black',
        'mainColor': '#525a8e',
        'accentColor': '#525a8e',
        'backgroundColor': '#f7f7f7',
        'content': [
            {
                'type': 'text',
                'header': 'Overview',
                'text': 'I developed this app due to the on going crisis of COVID-19. COVID-19 U.S. serves to provide coronavirus data in a way that is visually comprehensible. It focuses on U.S. cases and deaths given as totals and broken down by state.',
                'emphasis': false,
                'align': 'left',
            },
            {
                'type': 'text',
                'header': 'Implementation',
                'text': "To implement this site, I created a web scraper using a Node/Express backend and utilizing a library called Puppeteer. The backend scrapes Worldometer’s Coronavirus tracking data and then sends that data to a React front end. The React app stores the COVID-19 data locally in order to prevent constant scraping. The front end also dynamically renders the SVG’s based on the latest numbers. To create the SVG's, I used the help of a library called Nivo, which aided me in creating the data visualizations. I used Bootstrap and my own custom Sass styling to design the front end.",
                'emphasis': false,
                'align': 'left',
            },
            {
                'type': 'link',
                'header': 'View live application',
                'subheader': '',
                'image': '../../assets/dev/Covid/covid-link.png',
                'width': '100%',
                'link': 'https://visualize-covid19-us.herokuapp.com/',
                'text': 'Once you click the link, you may need to reload the page more than once to activate the Heroku app.'
            },
            {
                'type': 'link',
                'header': 'View front end on Github',
                'subheader': '',
                'image': '../../assets/dev/github-frontend.svg',
                'width': '100%',
                'link': 'https://github.com/ellajuengst/covid19us-client',
                'text': 'Check out my code!'
            },
            {
                'type': 'link',
                'header': 'View back end on Github',
                'subheader': '',
                'image': '../../assets/dev/github-backend.svg',
                'width': '100%',
                'link': 'https://github.com/ellajuengst/covid19us-server',
                'text': 'Check out my code!'
            }
           
        ]
    },
    {   
        'name': '2048',
        'category': 'development',
        'tools': ['js'],
        'subcategory': ['Front-End Development', 'Game Logic'],
        'logotype':'../../assets/dev/2048/2048-logotype.svg',
        'cover': '../../assets/dev/2048/2048-cover.png',
        'id': '/development/2048',
        'textColor': 'black',
        'mainColor': '#f0b37c',
        'accentColor': '#f0b37c',
        'backgroundColor': '#f7f7f7',
        'logotypeWidth': '210',
        'content': [
            {
                'type': 'text',
                'header': 'Summary',
                'text': 'In a web development class, I was tasked with creating the game 2048. I built the game using JavaScript and some jquery functionality. I separated the model, which contains all of the game logic, from the view, which generates the dynamic DOM elements that implement the user interface.',
                'emphasis': false,
                'align': 'left',
            },
            {
                'type': 'link',
                'header': 'View application on Github',
                'subheader': '',
                'image': '../../assets/dev/github-application.svg',
                'width': '100%',
                'link': 'https://github.com/426final/trivia',
                'text': 'Check out my code!'
            }   
        ]
    }
]



export default projects;