require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:one)
  end

  test "should get index" do
    get users_url, as: :json
    assert_response :success
  end

  test "should create user" do
    assert_difference('User.count') do
      post users_url, params: { user: { bio: @user.bio, email: @user.email, facebook: @user.facebook, github: @user.github, location: @user.location, name: @user.name, password_digest: @user.password_digest, personal_website: @user.personal_website, portfolio_password: @user.portfolio_password, portfolio_url: @user.portfolio_url, session_token: @user.session_token, tier: @user.tier, twitter: @user.twitter, username: @user.username, work_availability: @user.work_availability } }, as: :json
    end

    assert_response 201
  end

  test "should show user" do
    get user_url(@user), as: :json
    assert_response :success
  end

  test "should update user" do
    patch user_url(@user), params: { user: { bio: @user.bio, email: @user.email, facebook: @user.facebook, github: @user.github, location: @user.location, name: @user.name, password_digest: @user.password_digest, personal_website: @user.personal_website, portfolio_password: @user.portfolio_password, portfolio_url: @user.portfolio_url, session_token: @user.session_token, tier: @user.tier, twitter: @user.twitter, username: @user.username, work_availability: @user.work_availability } }, as: :json
    assert_response 200
  end

  test "should destroy user" do
    assert_difference('User.count', -1) do
      delete user_url(@user), as: :json
    end

    assert_response 204
  end
end
