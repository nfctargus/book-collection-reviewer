

export const sample_books: any[] = [
	{
		isbn:'0330362143',
		name: 'Temple',
		author: 'Matthew Reilly',
		favourite: false,
		stars: 4.5,
		imageUrl: 'assets/covers/matthew-reilly-temple.jpg',
		categories: ['Action', 'Fast Paced', 'Fiction'],
	},
	{
		isbn:'1743517017',
		name: 'The Great Zoo of China',
		author: 'Matthew Reilly',
		favourite: true,
		stars: 5,
		imageUrl: 'assets/covers/matthew-reilly-the-great-zoo-of-china.jpg',
		categories: ['Dragons', 'Fantasy', 'Fiction'],
	},
	{
		isbn:'1742612393',
		name: 'The Tournament',
		author: 'Matthew Reilly',
		favourite: false,
		stars: 4,
		imageUrl: 'assets/covers/matthew-reilly-the-tournament.jpg',
		categories: ['Fantasy', 'Puzzles', 'Chess'],
	},
	{
		isbn:'1409156052',
		name: 'The Lincoln Lawyer',
		author: 'Michael Connelly',
		favourite: false,
		stars: 4,
		imageUrl: 'assets/covers/michael-connelly-the-lincoln-lawyer.jpg',
		categories: ['True Crime', 'Thriller'],
	},
	{
		isbn:'0425265625',
		name: 'Tower Lord',
		author: 'Anthony Ryan',
		favourite: false,
		stars: 4,
		imageUrl: 'assets/covers/anthony-ryan-tower-lord.jpg',
		categories: ['Fantasy', 'Action','Adventure'],
	},
	{
		isbn:'0316097446',
		name: 'Zoo',
		author: 'James Patterson',
		favourite: false,
		stars: 4.5,
		imageUrl: 'assets/covers/james-patterson-zoo.jpg',
		categories: ['Fantasy', 'Fiction','Animals'],
	},
	{
		isbn:'074754624X',
		name: 'Harry Potter and the Goblet of Fire',
		author: 'J. K. Rowling',
		favourite: true,
		stars: 5,
		imageUrl: 'assets/covers/jk-rowling-harry-potter-goblet-of-fire.jpg',
		categories: ['Fantasy', 'Fiction','Magic'],
	},
	{
		isbn:'9780007466863',
		name: 'A Darkness at Sethanon',
		author: 'Raymond E. Feist',
		favourite: true,
		stars: 5,
		imageUrl: 'assets/covers/raymond-feist-darkness-at-sethanon.jpg',
		categories: ['Fantasy', 'Fiction','Magic'],
	},
]

export const sample_categories: any[] = [
	{ name:'Action',count:2},
	{ name:'Fast Paced',count:1},
	{ name:'Fiction',count:5},
	{ name:'Dragons',count:1},
	{ name:'Fantasy',count:6},
	{ name:'Puzzles',count:1},
	{ name:'Chess',count:1},
	{ name:'True Crime',count:1},
	{ name:'Thriller',count:1},
	{ name:'Adventure',count:1},
	{ name:'Animals',count:1},
	{ name:'Magic',count:2},
]

export const sample_users: any[] = [
    {
        firstName: "John",
        surname: "Smith",
        email: "john@gmail.com",
        password: "12345",
    },
    {
        firstName: "Jane",
		surname: "Doe",
        email: "jane@gmail.com",
        password: "12345",
		favourites:["174261180X","9780345534835"],
		theme:"dark"
    },
];