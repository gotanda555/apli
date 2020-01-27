json.array! @results do |result|
  json.id result.id
  json.text result.text.truncate(30, omission: '...')
  json.image result.image
  json.title result.title.truncate(14, omission: '...')
  json.user_id result.user_id
  json.nickname result.user.nickname
  json.user_sign_in current_user
  json.updated_at result.updated_at.strftime("%Y-%m-%d %H:%M")
end