class SprocessesController < ApplicationController
  before_action :set_sprocess, only: [:show, :update, :destroy]

  # GET /sprocesses
  def index
    @sprocesses = Sprocess.all

    render json: @sprocesses
  end

  # GET /sprocesses/1
  def show
    render json: @sprocess.to_json(include: :tasks)
  end

  # POST /sprocesses
  def create
    @sprocess = Sprocess.new(sprocess_params)

    if @sprocess.save
      render json: @sprocess, status: :created, location: @sprocess
    else
      render json: @sprocess.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /sprocesses/1
  def update
    if @sprocess.update(sprocess_params)
      render json: @sprocess
    else
      render json: @sprocess.errors, status: :unprocessable_entity
    end
  end

  # DELETE /sprocesses/1
  def destroy
    @sprocess.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sprocess
      @sprocess = Sprocess.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def sprocess_params
      params.require(:sprocess).permit(:name)
    end
end
