import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'

const Post =  (props) => (
    <Layout>
       <h1>{props.show.name}</h1>
       <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
       <img src={props.show.image.medium}/>
    </Layout>
);

Post.getInitialProps = async function(context) {
	const {id} = context.query;
	const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
	const show = await res.json();

	// это логается уже в браузере, т.к навигация происходит в браузере
	// но если зайти напрямую на эту страницу, то лог будет в сервере
	console.log(`Fetched show ${show.name}`);

	return {show};
}

export default Post;
