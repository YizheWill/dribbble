# json.extract! @collection, :id, :title
# json.shots @collection.shots do |s|
#   json.id s.id
#   json.imageUrl s.image_url
#   json.avatarUrl s.user.avatar_url
#   json.artistName s.user.name
# end

json.extract! s, :id, :imageUrl
