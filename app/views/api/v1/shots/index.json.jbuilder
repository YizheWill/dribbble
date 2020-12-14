@shots.each do |shot|
  json.set! shot.id do
    json.id shot.id
    json.imageUrl shot.image_url
    json.artistName shot.user.name
    json.avatarUrl shot.user.avatar_url
  end
end
