require 'test_helper'

class SprocessesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sprocess = sprocesses(:one)
  end

  test "should get index" do
    get sprocesses_url, as: :json
    assert_response :success
  end

  test "should create sprocess" do
    assert_difference('Sprocess.count') do
      post sprocesses_url, params: { sprocess: { name: @sprocess.name } }, as: :json
    end

    assert_response 201
  end

  test "should show sprocess" do
    get sprocess_url(@sprocess), as: :json
    assert_response :success
  end

  test "should update sprocess" do
    patch sprocess_url(@sprocess), params: { sprocess: { name: @sprocess.name } }, as: :json
    assert_response 200
  end

  test "should destroy sprocess" do
    assert_difference('Sprocess.count', -1) do
      delete sprocess_url(@sprocess), as: :json
    end

    assert_response 204
  end
end
