var API_PRIVATE =  {
  method: 'get',
  url: 'https://api.twitter.com/2/users/by/username/HuHng01?user.fields=created_at,profile_image_url,location,description,public_metrics,entities',
  headers: { 
    'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAFbVYQEAAAAAEDWQ33AW%2B%2Bt7w0FrcH7lwhBBFgc%3D2RufDOC8i4PwjESiDCPwQIvT8Ouod7Q4NEeMZokKE0MEsPToqO', 
    'Cookie': 'guest_id=v1%3A164309738946803760; guest_id_ads=v1%3A164309738946803760; guest_id_marketing=v1%3A164309738946803760; personalization_id="v1_/znlstjO1B1hvKKVTjMilw=="'
  }
};
var API_FEED =  {
  method: 'get',
  url: 'https://api.twitter.com/2/tweets/search/recent?query=from: FCBarcelona &tweet.fields=attachments,public_metrics,conversation_id,in_reply_to_user_id,created_at&expansions=author_id,attachments.media_keys,referenced_tweets.id&media.fields=preview_image_url,height,width,url&user.fields=url,profile_image_url',
  headers: { 
    'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAFbVYQEAAAAAEDWQ33AW%2B%2Bt7w0FrcH7lwhBBFgc%3D2RufDOC8i4PwjESiDCPwQIvT8Ouod7Q4NEeMZokKE0MEsPToqO', 
    'Cookie': 'guest_id=v1%3A164309738946803760; guest_id_ads=v1%3A164309738946803760; guest_id_marketing=v1%3A164309738946803760; personalization_id="v1_/znlstjO1B1hvKKVTjMilw=="'
  }
};

export {API_PRIVATE,API_FEED};





