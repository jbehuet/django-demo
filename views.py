from todos.models import Todo
from todos.serializers import TodoSerializer
from rest_framework import viewsets
from django.shortcuts import render_to_response

def index(request):
    return render_to_response('index.html')

# ViewSets define the view behavior.
class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
