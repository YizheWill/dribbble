@shots.each do |shot|
  json.set! shot.id do
    json.partial! 'show', shot: shot
    json.username shot.user.name
    json.avatarUrl shot.user.avatar_url
  end
end
