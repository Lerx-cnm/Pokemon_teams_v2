class TeamController < ApplicationController
    def show
        team = Team.find_by(id: params[:id])
        render json: team.to_json(except: [:created_at, :updated_at])
    end
end