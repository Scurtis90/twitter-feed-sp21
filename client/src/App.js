import { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';
const App = () => {
  const [tweets, setTweets] = useState([])
  useEffect( () => {
    axios.get('/api/tweets')
      .then( res => setTweets(res.data) )
      .catch( err => console.log(err) )
  }, [])
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={16} computer={4}>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={10}>
          <>
            <h1>Tweets</h1>
            {
              tweets.map( tweet =>
                <div key={tweet.id}>
                  <img src={tweet.user.profile_image_url} />
                  <h3>{tweet.user.name}</h3>
                  <p>{tweet.text}</p>
                </div>
              )
            }
          </>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
export default App;