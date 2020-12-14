json.shot do
  json.extract! shot, :id, :title, :description, :image_url, :view_count, :allow_comment, :image_or_video, :price
  json.artist do
    json.artistId shot.user.id
    json.artistName shot.user.name
    json.avatarUrl shot.user.avatar_url
    json.bio shot.user.bio
    json.artistShots shot.user.shots.pluck(:id, :image_url)
  end
end

# json.liks do
# end

# json.comments do
# end
