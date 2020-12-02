require 'test_helper'

class ShotsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @shot = shots(:one)
  end

  test "should get index" do
    get shots_url, as: :json
    assert_response :success
  end

  test "should create shot" do
    assert_difference('Shot.count') do
      post shots_url, params: { shot: { allow_comment: @shot.allow_comment, description: @shot.description, image_or_video: @shot.image_or_video, img_url: @shot.img_url, price: @shot.price, title: @shot.title, user_id: @shot.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show shot" do
    get shot_url(@shot), as: :json
    assert_response :success
  end

  test "should update shot" do
    patch shot_url(@shot), params: { shot: { allow_comment: @shot.allow_comment, description: @shot.description, image_or_video: @shot.image_or_video, img_url: @shot.img_url, price: @shot.price, title: @shot.title, user_id: @shot.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy shot" do
    assert_difference('Shot.count', -1) do
      delete shot_url(@shot), as: :json
    end

    assert_response 204
  end
end
