from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import ClienteSerializer, SolicitudSerializer
from files.models import Solicitud


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


class ObtenerSolicitud(APIView):
    def get(self, request):
        # Obtener todas las solicitudes de la base de datos
        solicitudes = Solicitud.objects.all()

        # Serializar los datos
        serializer = SolicitudSerializer(solicitudes, many=True)

        # Devolver los datos serializados en la respuesta
        return Response(serializer.data)
