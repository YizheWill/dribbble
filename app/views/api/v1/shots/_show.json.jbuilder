json.shot do
  json.extract! shot, :id, :title, :description, :image_url, :view_count, :allow_comment, :image_or_video, :price
  json.likers shot.shotlikes.pluck(:user_id)
  json.artist do
    json.artistId shot.user.id
    json.artistName shot.user.name
    json.avatarUrl shot.user.avatar_url
    json.bio shot.user.bio
    json.artistShots shot.user.shots do |s|
      json.imageUrl s.image_url
      json.id s.id
      json.artistId s.user.id
      json.avatarUrl s.user.avatar_url
      json.artistName s.user.name
      json.likers s.shotlikes.pluck(:user_id)
      json.commentCount s.comments.length
      json.likeCount s.shotlikes.length
    end
  end
end

# json.liks do
# end

# json.comments do
# end
