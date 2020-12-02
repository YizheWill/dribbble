require 'test_helper'

class ImageTagsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @image_tag = image_tags(:one)
  end

  test "should get index" do
    get image_tags_url, as: :json
    assert_response :success
  end

  test "should create image_tag" do
    assert_difference('ImageTag.count') do
      post image_tags_url, params: { image_tag: { shot_id: @image_tag.shot_id, tag_id: @image_tag.tag_id } }, as: :json
    end

    assert_response 201
  end

  test "should show image_tag" do
    get image_tag_url(@image_tag), as: :json
    assert_response :success
  end

  test "should update image_tag" do
    patch image_tag_url(@image_tag), params: { image_tag: { shot_id: @image_tag.shot_id, tag_id: @image_tag.tag_id } }, as: :json
    assert_response 200
  end

  test "should destroy image_tag" do
    assert_difference('ImageTag.count', -1) do
      delete image_tag_url(@image_tag), as: :json
    end

    assert_response 204
  end
end
