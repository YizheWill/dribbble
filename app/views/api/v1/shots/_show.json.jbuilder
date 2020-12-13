json.shot do
  json.extract! shot, :id, :title, :description, :image_url, :view_count, :allow_comment, :image_or_video, :price
end
# :likes, :comments
# json.favorite_benches user.favorite_benches.pluck(:id)
json.user do
  json.userId shot.user.id
  json.userName shot.user.username
end
