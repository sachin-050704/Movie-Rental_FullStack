from rest_framework import serializers
from .models import Movie, MovieCast, MovieCrew, Platform, Actor, Character, Language, Review, WebSeries, Season, Episode, SeriesCast, SeriesCrew, SeriesReview, ContactForm
from mypayment.serializers import RentalSerializer


class PlatformSerializer(serializers.ModelSerializer):
    class Meta:
        model = Platform
        fields = "__all__"


class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields = ["id", "act_name", "act_image"]


class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = ["id", "cat_name"]

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = "__all__"


class MovieCastSerializer(serializers.ModelSerializer):
    actor = ActorSerializer()
    character = CharacterSerializer()

    class Meta:
        model = MovieCast
        fields = ["id", "actor", "character", "cast_order"]


class MovieCrewSerializer(serializers.ModelSerializer):
    crew = serializers.StringRelatedField()

    class Meta:
        model = MovieCrew
        fields = "__all__"


class ReviewSerializers(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = "__all__"


class MovieSerializer(serializers.ModelSerializer):
    platforms = PlatformSerializer(source="mov_platforms", many=True)
    languages = LanguageSerializer(many=True)
    casts = MovieCastSerializer(many=True)
    crews = MovieCrewSerializer(many=True)
    reviews = ReviewSerializers(many=True)
    rentals = RentalSerializer(many=True, read_only=True)

    class Meta:
        model = Movie
        fields = "__all__"




class EpisodeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Episode
        fields = "__all__"

class SeasonSerializer(serializers.ModelSerializer):
    episodes = EpisodeSerializer(many=True)

    class Meta:
        model = Season
        fields = ["id", "season_number", "episodes"]

class SeriesCastSerializer(serializers.ModelSerializer):
    actor = ActorSerializer()
    character = CharacterSerializer()

    class Meta:
        model = SeriesCast
        fields = ["id", "actor", "character", "cast_order"]

class SeriesCrewSerializer(serializers.ModelSerializer):
    crew = serializers.StringRelatedField()

    class Meta:
        model = SeriesCrew
        fields = "__all__"

class SeriesReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = SeriesReview
        fields = "__all__"

class WebSeriesSerializer(serializers.ModelSerializer):
    platforms = PlatformSerializer(many=True)
    languages = LanguageSerializer(many=True)
    seasons = SeasonSerializer(many=True)
    casts = SeriesCastSerializer(many=True)
    crews = SeriesCrewSerializer(many=True)
    reviews = SeriesReviewSerializer(many=True)
    rentals = RentalSerializer(many=True, read_only=True)

    class Meta:
        model = WebSeries
        fields = "__all__"
    


class ContactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactForm
        fields = "__all__"