import * as React from 'react';
import { View } from 'react-native';
import newsApiRequest from '../../data/API-service/apiservice_private';
function Profile(props) {
  const [twitter, setTwitter] = React.useState(null);
  React.useEffect(() => {
    newsApiRequest({}).then((response) => {
      setTwitter(response.data);
    });
  }, []);

  if (!twitter) return null;

  return(
    <View style ={{flex:1,backgroundColor: 'blue'}}>

    </View>

  );
}

export default Profile;