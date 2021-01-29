@shots.each do |shot|
  json.set! shot.id do
    json.id shot.id
    json.imageUrl shot.image_url
    json.artistName shot.user.name
    json.avatarUrl shot.user.avatar_url
    json.artistId shot.user.id
    json.commentCount shot.comments.length
    json.likeCount shot.shotlikes.length
    json.likers shot.shotlikes.pluck(:user_id)
    json.shotCount @shotCount
  end
end
