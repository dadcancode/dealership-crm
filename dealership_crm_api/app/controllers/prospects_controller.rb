class ProspectsController < ApplicationController
  before_action :set_prospect, only: [:show, :update, :destroy]

  # GET /prospects
  def index
    @prospects = User.find(params[:user_id]).prospects.order("created_at DESC")

    render json: @prospects.to_json(include: :vehicle)
  end

  # GET /prospects/1
  def show
    render json: @prospect.to_json(include: :vehicle)
  end

  # POST /prospects
  def create
    p "i ran"
    @prospect = Prospect.new(prospect_params)
    @prospect.user_id = params[:user_id]
    sprocess_id = Sprocess.where(name: prospect_params[:status]).ids
    p sprocess_id[0]
    @prospect.sprocess_id = sprocess_id[0]
    p @prospect.sprocess_id
    tasks = Task.where(sprocess_id: sprocess_id[0])

    tasks.each_with_index do |x|
      @prospect.task_type.push(x.lead_type)
      @prospect.task_completed.push(x.completed)
      @prospect.task_due_dates.push(x.due_date)
    end

    # p "{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}#{sprocess_id[0]}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}{}"

    if @prospect.save
      render json: @prospect, status: :created
    else
      render json: @prospect.errors, status: :unprocessable_entity
    end
    # test = Task.where(sprocess_id: 1)
  end

  # PATCH/PUT /prospects/1
  def update
    if @prospect.update(prospect_params)
      render json: @prospect
    else
      render json: @prospect.errors, status: :unprocessable_entity
    end
  end

  # DELETE /prospects/1
  def destroy
    @prospect.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_prospect
      @prospect = Prospect.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def prospect_params
      params.require(:prospect).permit(:first_name, :last_name, :phone, :email, :status, :vehicle_id, :task_due_dates, :task_type, :task_completed, :task_notes)
    end
end
