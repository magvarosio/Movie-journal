from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticated

from .serializers.common import CommentSerializer
from .models import Comment


# /comments/
class CommentListView(APIView):
    permission_classes = (IsAuthenticated, )
  
  # ***** CREATE A COMMENT ******

    def post(self, request):
        try:
            comment_to_add = CommentSerializer(data=request.data)
            if comment_to_add.is_valid():
                comment_to_add.save()
                return Response(comment_to_add.data, status.HTTP_201_CREATED)
            return Response(comment_to_add.errors, status.HTTP_422_UNPROCESSABLE_ENTITY)
        except Exception as e:
            return Response(str(e), status.HTTP_500_INTERNAL_SERVER_ERROR)

# **** DELETE COMMENT *****

class CommentDetailView(APIView):
    permission_classes = (IsAuthenticated, )

    def delete(self, _request, pk):
        try:
            comment_to_delete = Comment.objects.get(pk=pk)
            comment_to_delete.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Comment.DoesNotExist as e:
            print(e)
            raise NotFound(str(e))
