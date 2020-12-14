json.shot do
  json.extract! shot, :id, :title, :description, :image_url, :view_count, :allow_comment, :image_or_video, :price
end
json.user do
  json.userId shot.user.id
  json.userName shot.user.name
end
# json.liks do
# end

# json.comments do
# end
