import matter from 'gray-matter';
import Post from '../components/post';
import PropTypes from 'prop-types';
import Layout from '../components/layout';

const HomePage = ({ posts }) => {
  const postElements = posts.map((post, idx) => <Post key={idx} {...post} />);
  return (
    <Layout title='Writing' description={"James Bedont's writings"}>
      {postElements}
    </Layout>
  );
};

HomePage.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })
  ).isRequired
};

HomePage.getInitialProps = async function() {
  const allPostsFrontMatter = (context => {
    const postRelFilePaths = context.keys();
    return postRelFilePaths.map(postRelFilePath => {
      const { default: fileContents } = context(postRelFilePath);
      const { data: frontMatter } = matter(fileContents);

      const date = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }).format(new Date(frontMatter.date));

      const link = frontMatter.title.toLowerCase().replace(/\s/g, '-');

      return {
        title: frontMatter.title,
        link,
        date
      };
    });
  })(require.context('../posts', true, /\.md$/));

  allPostsFrontMatter.sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    posts: allPostsFrontMatter
  };
};

export default HomePage;
