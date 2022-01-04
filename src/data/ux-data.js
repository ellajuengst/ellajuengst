let projects = [
    {   
        'name': 'techHub',
        'category': 'ux-design',
        'tools': ['illustrator', 'xd'],
        'subcategory': ['UX Strategy', 'UX Research', 'UX Design'],
        'logotype':'../../assets/ux/techhub/TechHub-logotype.svg',
        'cover': '../../assets/ux/techhub/TechHub-Cover.png',
        'id': '/ux-design/techhub',
        'textColor': '#444444',
        'mainColor': '#679985',
        'accentColor': '#8AC194',
        'backgroundColor': '#f7f7f7',
        'content': [
            {
                'type': 'subsection',
                'background': true,
                'content': [
                    {
                        'type': 'text',
                        'header': 'The Problem',
                        'subheader': '',
                        'text': 'Information is inexpensive, but formal education is expensive.',
                        'emphasis': true,
                        'align': 'center'

                    },
                    {
                        'type': 'text',
                        'header': 'The Question',
                        'subheader': '',
                        'text': 'How can we make education more affordable and accessible in the digital age?',
                        'emphasis': true,
                        'align': 'center'


                    }
                ]
            },
            {
                'type': 'list',
                'header': 'Key Research Notes',
                'subheader': 'Qualitative data was collected from college students of a variety of backgrounds and disciplines.',
                'content': [
                    '100% of interviewees state they use Youtube for educational purposes or to supplement their course instruction.',
                    'Users use Youtube to supplement their class material but the dislike the amount of time they must spend searching.',
                    'Users wish there was an easier way to organize videos into playlists or curriculum.',
                    'Technology-related-majors tend to use Youtube more for practice and learning than humanities or life sciences.'
                ]
                
            },
            {
                'type': 'image',
                'header': false,
                'image': '../../assets/ux/techhub/TechHub-journeyMap.svg',
                'width': '100%'
            },
            {
                'type': 'list',
                'header': 'Key Pain Points',
                'subheader': 'Determined from user journey map.',
                'content': [
                    'Due to high volume, users don’t know what videos to watch.',
                    'Users become easily distracted by non-educational videos.',
                    'Users can only access Youtube videos while connected to internet.'
                ]
                
            },
            {
                'type': 'image-text',
                'header': 'Meet Alli',
                'subheader': 'Female, 21',
                'image': '../../assets/ux/techhub/TechHub-alli.png',
                'width': '100%',
                'text': 'Alli graduated high school in 2020, and she is struggling to figure out how what she wants to do for her career and future. She considered going to college, but the steep costs and the negative impacts of COVID-19 on her family would make paying for university very challenging. She knows she has an interest in technology after taking an Introductoy Computer Science class in high school. She has tried to do some self teaching on Youtube, but she is struggling to stay accountable and know what topics to learn next.'
            },
            {
                'type': 'image-text',
                'header': 'Meet Tom',
                'subheader': 'Male, 39',
                'image': '../../assets/ux/techhub/TechHub-tom.png',
                'width': '100%',
                'text': 'Tom went to university in his 20s and achieved a degree in Aerospace Engineering. He worked as an engineer for the past 15 years. While he enjoyed his job at first, over the years he has realized engineering is not his passion. He has always enjoyed painting and drawing and recently heard about the upcoming field of UX design. He does not want to go back to university, but he would like to start building his UX skills so that he will be ready to make a career change without going in blind.'
            },
            {
                'type': 'image-text',
                'header': 'Meet Liz',
                'subheader': 'Female, 22',
                'image': '../../assets/ux/techhub/TechHub-liz.png',
                'width': '100%',
                'text': 'Liz attends a college in her home state and is studying Statistics. She enjoys her major, but sometimes she feels that she is missing content from her lectures (either because she was distracted in class or the professor does not explain concepts fully). She has used Youtube in the past to supplement her lecture material, but she finds it hard to narrow down the resources and often spends lots of time finding the right videos. She feels that she sacrifices valuable studying time just trying to find resources to learn.'
            },
            {
                'type': 'text',
                'header': 'Our Goal',
                'subheader': '',
                'text': 'To provide a platform that utilizes the accessibility and affordability of Youtube but implements a more efficient learning environment.',
                'emphasis': true,
                'align': 'center'

            },
            {
                'type': 'list',
                'header': 'Principles',
                'background': true,
                'subheader': 'To guide the design process.',
                'content': [
                    'Structured',
                    'Intuitive',
                    'Accessible'
                ]
                
            },
            {
                'type': 'subsection',
                'background': false,
                'content': [
                    {
                        'type': 'text',
                        'header': 'Metric 1',
                        'subheader': '',
                        'text': 'Dashboard unique to each user structured with curriculum and courses',
                        'emphasis': false,
                        'align': 'center'
                    },
                    {
                        'type': 'text',
                        'header': 'Metric 2',
                        'subheader': '',
                        'text': 'Implementation of recognizable Youtube UI features (2x speed, similar video player)',
                        'emphasis': false,
                        'align': 'center'

                    },
                    {
                        'type': 'text',
                        'header': 'Metric 3',
                        'subheader': '',
                        'text': 'Free to all. Download videos. You don’t even need to make in account to watch videos.',
                        'emphasis': false,
                        'align': 'center'

                    },
                ]
            },
            {
                'type': 'subsection',
                'background': true,
                'content': [
                    {
                        'type': 'text',
                        'header': 'Youtube Learning',
                        'subheader': 'Competitive Analysis 1',
                        'text': 'Pros: Access to Youtube’s full library. Cons: No curriculum, hard to filter by subject, distractions.',
                        'emphasis': false,
                        'align': 'left'
                    },
                    {
                        'type': 'text',
                        'header': 'Khan Academy',
                        'subheader': 'Competitive Analysis 2',
                        'text': 'Pros: Consistent lectures, structured curriculum. Cons: Only one content producer, no design focused videos, less advanced.',
                        'emphasis': false,
                        'align': 'left'
                    }
                ]
            },
            {
                'type': 'text',
                'header': 'Value Proposition',
                'subheader': 'What does techHub bring to the table?',
                'text': 'Utilizing the accessibility and affordability of Youtube, techHub provides thousands of educational videos and many different certificate tracks that can prepare anyone for a career in tech. Through working with real professionals, TechHub has filtered down Youtube’s limitless (and sometimes overwhelming) content to the most useful and clear videos, so users can spend less time searching and more time learning. The content and resources to allow one to become an expert in a technology related field are out there, but users often don’t know what to study or where to look. TechHub provides that sense of direction.',
                'emphasis': true,
                'align': 'left'
            },
            {
                'type': 'image-hover',
                'header': 'Midfidelity Wireframes',
                'subheader': 'Use cursor to zoom and pan.',
                'image': '../../assets/ux/techhub/TechHub-midfidelity.png',
                'width': '100%'
            },
            {
                'type': 'image',
                'header': 'Brand Palette',
                'image': '../../assets/ux/techhub/TechHub-brand-palette.png',
                'width': '70%'
            },
            {
                'type': 'link',
                'header': 'View High Fidelity Prototype in Adobe XD',
                'image': '../../assets/ux/techhub/TechHub-link.png',
                'width': '100%',
                'link': 'https://xd.adobe.com/view/3962cd30-060f-45b1-8edf-cea6ec7b49d7-6c31/?fullscreen',
                'text': 'Checkout the UX/UI work I completed for TechHub in this Adobe XD link.'
            }
           
        ]
    },
    {   
        'name': 'float',
        'category': 'ux-design',
        'tools': ['figma', 'illustrator'],
        'subcategory': ['UX Strategy', 'UX Design', 'UI Design'],
        'logotype':'../../assets/ux/float/Float-logotype.svg',
        'cover': '../../assets/ux/float/Float-cover.png',
        'id': '/ux-design/float',
        'textColor': 'black',
        'mainColor': '#40A9FF',
        'accentColor': '#40A9FF',
        'backgroundColor': '#f7f7f7',
        'content': [
            {
                'type': 'text',
                'header': 'Background',
                'subheader': 'So, what even is Float?',
                'emphasis': false,
                'align': 'left',
                'background': false,
                'text': 'Float is an innovative startup that connects homeowners, businesses, and community centers with renters looking for monthly parking. The goal of the company is to reduce wasted space in urban centers by allowing unused spots to be rented out to individuals. Float is very appealing to college students, who are looking for affordable monthly parking near campuses. As a UX intern, I worked to redesign Float’s website from the ground up, in order to create a more efficient and clear interface for both renters and hosts.'
            },
            {
                'type': 'text',
                'header': 'Problem Statement',
                'emphasis': false,
                'align': 'left',
                'background': true,
                'text': 'Float’s current site is functional, but it is neither appealing or efficient. I worked with Krupa Patel, another UX intern, to create a list of weaknesses by studying the current UX and UI, to determine what areas of the site needed to be changed in the revamp.'
            },
            {
                'type': 'list',
                'header': 'User Experience Weaknesses',
                'subheader': '',
                'content': [
                    'Too “host-focused”: the site was difficult to navigate as a renter because a lot of the features were targeted towards hosts using the site',
                    'Redundancy in the dashboard: the dashboard pages contained a lot of redundant information, making it confusing for users to comprehend the data.',
                    'Lacking a sense of direction on login: The site did not provide a clear course of action for new users, you have to click several buttons to search for spaces or list spaces.',
                    'Poor data display: A lot of the data shown in tables is shown in an unappealing or confusing way.',
                    'Lacking a consistent navbar with relevant links to both dashboard and search pages',
                    'Lacking information on users (profile, bio, ratings) which creates a sense of distrust'
                ]
            },
            {
                'type': 'list',
                'header': 'User Interface Weaknesses',
                'subheader': '',
                'background': true,
                'content': [
                    'Generic and unoriginal UI (illustrations, images).',
                    'Long paragraph texts are sometimes center aligned. This makes them more difficult to read.',
                    'Lack of color or interesting UI elements beyond the homepage.',
                    'Outdated feel and look to the site’s UI elements.',
                    'Hover interactions on buttons are too extreme.'
                ]
            },
            {
                'type': 'list',
                'header': 'New Feature Requests',
                'subheader': 'Additional features the Float team wants included in the new site.',
                'background': false,
                'content': [
                    'Internal messaging between hosts and renters',
                    'Public profile pages for users',
                    'Ratings and reviews of hosts and users',
                    'Cancellations by renters',
                    'Subscriptions status for spaces (active, upcoming, ended, cancelled)',
                    'Search filtering and sorting options',
                    'Map thumbnails',
                    'Host editing capabilities once lot is posted'
                ]
            },
            {
                'type': 'subsection',
                'background': true,
                'content': [
                    {
                        'type': 'text',
                        'header': 'Audience',
                        'text': 'Float is currently based out of three college towns: Chapel Hill NC, Centre County PA, and Ann Arbor MI. Float’s users vary from college students to middle aged, working adults. We therefore needed to create a site that would work for a people with a wide range of backgrounds, economic statuses, and availability. We settled around creating a site that prioritizes clarity and efficiency, as many college students and business owners are not likely to spend much time on a site that is confusing and hard to navigate quickly.',
                        'emphasis': false,
                        'align': 'left'
                    },
                    {
                        'type': 'text',
                        'header': 'User Studies',
                        'text': 'Krupa and I conducted several user studies, in which we interviewed users about their experience with the current site. We asked them to walk through 10 different tasks on the site and observed their process and when their pain points occurred. We also polled the current Float staff, to gauge their response to the current interface. The user studies gave us valuable feedback regarding other pitfalls of the site, including inability to specify more details when searching for a space and lack of efficiency in navigating around the site.',
                        'emphasis': false,
                        'align': 'left'
                    }
                ]
            },
            {
                'type': 'text',
                'header': 'Process',
                'emphasis': false,
                'align': 'left',
                'background': false,
                'text': 'After studying the pitfalls of the current site and defining our users, we began the process of building our mockup. I focused my work on the dashboard pages, which is where the user can view and edit their bookings, listings, profile, account, and messages, and the search pages, where users find the perfect space based on a variety of search criteria. The Float leadership team requested the use of Ant Design System for Figma and React, which would ease the transition to code for their engineers.'
            },
            {
                'type': 'text',
                'header': 'Accomplishments',
                'emphasis': true,
                'align': 'center',
                'background': false,
                'text': 'I believe the new pages accomplish many of the goals we aimed to achieve before beginning the design process, and I will explain several of them below.'
            },
            {
                'type': 'text',
                'header': '1. A clear sense of direction when navigating the site',
                'emphasis': false,
                'align': 'left',
                'background': false,
                'text': 'The new design provides two clear courses of action once a user logs in to their new account. In the old interface, a user had to make multiple clicks to reach the search pages, but the new design makes it very clear how to either rent or list a space. The dashboard navigation has clear list element titles and the top navbar allows users to switch between the search pages and the dashboard. Overall, we edited both the language and the structure of the site to allow for more clarity.'
            },
            {
                'type': 'image',
                'header': false,
                'image': '../../assets/ux/float/Float-mockup-1.png',
                'width': '70%'
            },
            {
                'type': 'text',
                'header': '2. Builds trust between renters and hosts',
                'emphasis': false,
                'align': 'left',
                'background': false,
                'text': 'The new profile section allows for users to read about the host or renter they will be working with. Users provide their name, a bio, and school or work. The new review system also creates more transparency and allows for users to provide their own feedback regarding working with another user.'
            },
            {
                'type': 'image',
                'header': false,
                'image': '../../assets/ux/float/Float-mockup-2.png',
                'width': '70%'
            },
            {
                'type': 'text',
                'header': '3. A clean, consistent, and modern design palette',
                'emphasis': false,
                'align': 'left',
                'background': false,
                'text': 'The new palette looks to give the site a professional, clean feel. The logo we created is more modern than the current logo, and it allows for Float to keep their company open to future expansions from exclusively parking/car related real estate. We also made small adjustments like left aligning text and adjusting hover states.'
            },
            {
                'type': 'image',
                'header': false,
                'image': '../../assets/ux/float/Float-design-palette.png',
                'width': '100%'
            },
            {
                'type': 'text',
                'header': '4. Successful implementation of new features',
                'emphasis': false,
                'align': 'left',
                'background': false,
                'text': 'The new release will include many new features including cancellation capabilities, internal messaging, profiles, tooltips, search page filters and sorting, map thumbnails, ratings and reviews, how-to-host and how-to-rent pages, and more. I believe our designs successfully delivered these new functionalities in a user friendly format. They are both intuitive and aesthetically appealing. Check out a few of the new features below.'
            },
            {
                'type': 'image',
                'header': 'Messaging',
                'image': '../../assets/ux/float/Float-mockup-3.png',
                'width': '70%'
            },
            {
                'type': 'image',
                'header': 'Search Filters and Sorting, Map Thumbnails',
                'image': '../../assets/ux/float/Float-mockup-4.png',
                'width': '70%'
            },
            {
                'type': 'image',
                'header': 'How-to-Host Page',
                'image': '../../assets/ux/float/Float-mockup-5.png',
                'width': '70%'
            },
            {
                'type': 'image',
                'header': 'Rental Cancellations',
                'image': '../../assets/ux/float/Float-mockup-6.png',
                'width': '70%'
            },
            {
                'type': 'image',
                'header': 'Subscription Status for Spaces',
                'image': '../../assets/ux/float/Float-mockup-7.png',
                'width': '70%'
            },
            {
                'type': 'link',
                'header': 'View work in Figma',
                'subheader': 'Female, 21',
                'image': '../../assets/ux/float/Float-link-mockup.png',
                'width': '100%',
                'link': 'https://www.figma.com/file/04LIZIp8Bd7RXQO37S6RAi/Float-UX%2FUI-Designs?node-id=0%3A1',
                'text': 'Checkout the UX/UI work I completed for Float in this Figma file.'
            },
            {
                'type': 'text',
                'header': 'To Conclude',
                'emphasis': true,
                'align': 'left',
                'background': false,
                'text': 'My designs were passed on to the engineering team, who are in the process of rebuilding Float’s site, utilizing the new UX and UI. '
            },

        ]
    },
    {   
        'name': 'coliving',
        'category': 'ux-design',
        'tools': ['xd'],
        'subcategory': ['UX Strategy', 'Business Strategy', 'UX Design'],
        'logotype':'../../assets/ux/coliving/Coliving-logotype.svg',
        'cover': '../../assets/ux/coliving/Coliving-cover.png',
        'id': '/ux-design/coliving-during-covid',
        'textColor': 'black',
        'mainColor': '#848484',
        'accentColor': '#848484',
        'backgroundColor': '#f7f7f7',
        'content': [
            {
                'type': 'text',
                'header': 'Background',
                'emphasis': false,
                'align': 'left',
                'background': false,
                'text': 'I designed this app as a project for my course titled UX Strategy and Design. It will not be developed, but it served as an exercise in UX strategy.'
            },
            {
                'type': 'text',
                'header': 'Overview',
                'emphasis': false,
                'align': 'left',
                'background': true,
                'text': 'This app helps college students find roommates who share similar opinions regarding COVID-19 safety protocols. With their new or current roommates, users can build and customize contracts from recommended templates.'
            },
            {
                'type': 'text',
                'header': 'Problem Statement',
                'emphasis': false,
                'align': 'left',
                'background': false,
                'text': 'Throughout the COVID-19 pandemic, my housemates and I have struggled to discuss and create mutually agreed upon rules regarding social distancing and COVID-19 precautions. With many different comfort levels regarding risk, arguments can easily occur. Beyond negotiating with current housemates, I know many students who have struggled to find new roommates who practice similar COVID safety protocols.'
            },
            {
                'type': 'text',
                'header': 'The Question',
                'emphasis': true,
                'align': 'center',
                'background': true,
                'text': 'How can we manage and maintain healthy relationships when individuals (sharing a living space) have different opinions or comfort levels regarding COVID safety measures and risk?'
            },
            {
                'type': 'text',
                'header': 'Purpose',
                'emphasis': false,
                'align': 'left',
                'background': false,
                'text': 'The purpose of this app is to streamline the process of communicating one’s COVID safety preferences when searching for a new roommate, and it also serves as a place to build safety agreements between current housemates. The app not only provides a safer environment for college students to find a new roommate, but it also removes the need to ask uncomfortable questions.'
            },
            {
                'type': 'text',
                'header': 'UX Strategy',
                'emphasis': false,
                'align': 'left',
                'background': true,
                'text': "When building their profile, users must confirm they have read and understood the CDC guidelines, as the app does not endorse any behavior that conflicts with the CDC recommendations. Users then complete a “Personal Risk Evaluation” to determine if they have any preexisting conditions, and a “Comfort Assessment,” to determine their risk tolerance. As everyone has different levels of comfort, users will use a slider to select where exactly they fall on the spectrum from “Not at All Comfortable” to “Totally Comfortable” for activities with varying levels of exposure risk. After submitting their information, users will be placed into one of three categories: Low, Medium, and High Risk Tolerance. An individual’s Risk Tolerance is indicated on their public profile, so other users can find people with similar comfort levels in the search pages. The contract building section of the app uses the information from the users’ initial surveys to create a baseline contract that compromises between each user's responses. If users have different ideas regarding safety, the app will tend to favor users with lower risk tolerance when creating the contract. Users can edit their generated contract to more specifically fit their needs by adding, removing, or changing guidelines."
            },
            {
                'type': 'text',
                'header': 'Customer Segment',
                'subheader': 'Business Strategy',
                'emphasis': false,
                'align': 'left',
                'background': false,
                'text': 'Research suggests that this app would be used by college students who are currently struggling to navigate relationships within their living situation or are looking for new roommates during the COVID-19 pandemic. It targets individuals who may have differing opinions about COVID-19 safety measures from their roommates or those struggle to initiate uncomfortable conversations.'
            },
            {
                'type': 'text',
                'header': 'Value Proposition',
                'subheader': 'Business Strategy',
                'emphasis': false,
                'align': 'left',
                'background': false,
                'text': 'This app looks to ease social and health related stress caused by the COVID-19 pandemic through streamlining communication about safety and quarantine guidelines within households and helping users find new roommates with similar tolerances of risk.'
            },
            {
                'type': 'subsection',
                'background': true,
                'content': [
                    {
                        'type': 'text',
                        'header': 'Facebook',
                        'text': 'Facebook Groups provide a platform for college students to connect with classmates to find potential roommates. It allows for easy messaging, and it also includes the benefit of tagging other users in posts. However, Facebook Groups were not designed for the purpose of connecting roommates, so there are no specialized tools. While users may sometimes mention their preferred COVID-19 safety measures, there is no contract builder or user matching based on risk tolerance.',
                        'emphasis': false,
                        'align': 'left',
                        'subheader': 'Competitive Analysis'
                    },
                    {
                        'type': 'text',
                        'header': 'Roomster',
                        'text': 'Roomster is an app that allows users to search for houses, rooms, and roommates in a particular area. The app provides LinkedIn verification of other users. However, it is not specific to university students which could pose some safety risks for college students looking for another person to live with. There is also no reference to COVID-19 safety measures or way to specify one’s preferences.',
                        'emphasis': false,
                        'align': 'left',
                        'subheader': 'Competitive Analysis'
                    },
                    {
                        'type': 'text',
                        'header': 'Roomi',
                        'text': 'Roomi is also an app that allows users to look for both potential roommates and rooms to rent. It provides the price ranges of other users so a user knows if someone would be a good financial match for them. It also provides roommate preferences such as cleaning, smoking, and guests. However, similar to Roomster, there is no place to specify preferences regarding COVID-19 protocols.',
                        'emphasis': false,
                        'align': 'left',
                        'subheader': 'Competitive Analysis'
                    }
                ]
            },
            {
                'type': 'image-hover',
                'header': 'Wireframes: Iteration 1',
                'subheader': 'Use cursor to zoom and pan.',
                'image': '../../assets/ux/coliving/Coliving-lowfidelity.png',
                'width': '100%'
            },
            {
                'type': 'list',
                'header': 'Notes on Wireframes: Iteration 1',
                'emphasis': false,
                'align': 'left',
                'background': false,
                'content': [
                    'Users indicated that “Risk Tolerance” was a better phrase to describe what is currently labelled as “Risk Indicator.”',
                    'Users appreciated the slider as it allows for users to indicate their exact feeling about a particular situation rather than having to choose from limited options.',
                    'Users preferred their answers to specific questions to not be displayed on their public profile, as it is not clear that these responses will be published when filling out the assessment.',
                    'The sign up page requires users to sign in with their university email and verification.'

                ]
            },
            {
                'type': 'image-hover',
                'header': 'Wireframes: Iteration 2',
                'subheader': 'Use cursor to zoom and pan.',
                'image': '../../assets/ux/coliving/Coliving-wireframes-2.png',
                'width': '100%'
            },
            {
                'type': 'list',
                'header': 'Notes on Wireframes: Iteration 2',
                'emphasis': false,
                'align': 'left',
                'background': false,
                'content': [
                    'Users indicated that the “Find Roommate” page should have an option to view each of the people in an expanded card view and swipe through the cards to view more.',
                    'The gray circles represent buttons that take users to the next page in a series.',
                    'Menu button causes the menu page to slide overlay from the right.',
                    'Users also specified that the “Find Roommate” page should include a search bar.',
                    'When building a contract, user’s are provided with different baseline contracts based on their preferences or whether they clicked Low, Medium, or High Risk Tolerance. However, each section on the template is prefaced with the CDC recommended guidelines for that category.'

                ]
            },
            {
                'type': 'image-hover',
                'header': 'Wireframes: Iteration 3',
                'subheader': ' cursor to zoom and pan.',
                'image': '../../assets/ux/coliving/Coliving-wireframes-3.png',
                'width': '100%'
            },
            {
                'type': 'list',
                'header': 'Notes on Wireframes: Iteration 3',
                'emphasis': false,
                'align': 'left',
                'background': false,
                'content': [
                    'Search bar was added for convenient searching of other users’ names or locations',
                    'Square buttons that render the expanded card view for each different section (Recommended, Near You, Similar Comfort Level) were added. Additionally, a user can click on another individual’s thumbnail to view more details about that user in card view.',
                    'Card view was designed to include the most important information about each user, including name, location, age, bio, and Risk Tolerance.',
                    'The message pages were added with a simple, clean interface inspired by popular messaging apps.',
                    'Check boxes were added to the “Personal Risk Evaluation” page to make it clear how users should interact with each item.'

                ]
            },
            
        ]
    }
]



export default projects;