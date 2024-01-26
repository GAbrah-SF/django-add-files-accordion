from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ClienteSerializer


class CreateCliente(APIView):
    def post(self, request):
        serializer = ClienteSerializer(data=request.data)  # Serializa los datos de entrada utilizando un Serializer

        if serializer.is_valid():
            # serializer.save()
            print(request.data)
            return Response(status=status.HTTP_200_OK,
                            data={"icon": "success", "message": f"Datos guardados correctamente"})

        else:
            return Response(status=status.HTTP_400_BAD_REQUEST,
                            data={"icon": "error", "message": f"Error al recibir datos"})
