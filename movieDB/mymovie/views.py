from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import AllowAny,IsAuthenticated
from .models import *
from .serializers import *
from rest_framework import status

# Create your views here.
@api_view(["GET"])
def movie_list(request):
    movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def movie_detail(request, id):
    movie = Movie.objects.get(id=id)
    serializer = MovieSerializer(movie)
    return Response(serializer.data)

@api_view(["POST"])
@permission_classes([AllowAny])
def add_review(request):
    if request.method == 'POST':
        serializer = ReviewSerializers(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"Message":"Review add successfully"},status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET"])
@permission_classes([AllowAny])
def web_list(request):
    web = WebSeries.objects.all()
    serializer = WebSeriesSerializer(web, many=True)
    return Response(serializer.data)

@api_view(["POST"])
@permission_classes([AllowAny])
def add_web_review(request):
    if request.method == 'POST':
        serializer = SeriesReviewSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"Message":"Review add successfully"},status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def toggle_watchlist(request):
    content_type = request.data.get("type")  
    content_id = request.data.get("id")

    if content_type == "movie":
        obj = Movie.objects.get(id=content_id)
        watch = Watchlist.objects.filter(user=request.user, movie=obj).first()

        if watch:
            watch.delete()
            return Response({"status": "removed"})
        else:
            Watchlist.objects.create(user=request.user, movie=obj)
            return Response({"status": "added"})

    elif content_type == "webseries":
        obj = WebSeries.objects.get(id=content_id)
        watch = Watchlist.objects.filter(user=request.user, webseries=obj).first()

        if watch:
            watch.delete()
            return Response({"status": "removed"})
        else:
            Watchlist.objects.create(user=request.user, webseries=obj)
            return Response({"status": "added"})

    return Response({"error": "Invalid type"}, status=400)
    

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_watchlist(request):
    watchlist = Watchlist.objects.filter(user=request.user)

    movies = [w.movie for w in watchlist if w.movie]
    webseries = [w.webseries for w in watchlist if w.webseries]

    movie_data = MovieSerializer(
        movies,
        many=True,
        context={"request": request}
    ).data

    webseries_data = WebSeriesSerializer(
        webseries,
        many=True,
        context={"request": request}
    ).data

    return Response({
        "movies": movie_data,
        "webseries": webseries_data
    })


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def remove_watchlist(request):
    content_type = request.data.get("type") 
    content_id = request.data.get("id")

    try:
        if content_type == "movie":
            watch = Watchlist.objects.get(
                user=request.user,
                movie_id=content_id
            )

        elif content_type == "webseries":
            watch = Watchlist.objects.get(
                user=request.user,
                webseries_id=content_id
            )

        else:
            return Response({"error": "Invalid type"}, status=400)

        watch.delete()
        return Response({"status": "removed"})

    except Watchlist.DoesNotExist:
        return Response({"error": "Not found"}, status=404)
    



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def contact_form(request):
    if request.method == "POST":
        serializer = ContactFormSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'Message':'Contact request is submitted'},status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)