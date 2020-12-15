@collections.each do |collection|
  json.set! collection.id do
    json.id collection.id
    json.userId collection.user.id
    json.shots collection.shots.pluck(:image_url)
    json.title collection.title
    json.artistCount collection.artists.uniq.count
  end
end
