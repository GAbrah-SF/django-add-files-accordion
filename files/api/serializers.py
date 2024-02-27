from rest_framework import serializers
from files.models import Cliente, Solicitud


class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ("first_name", "last_name", "email", "rfc")


class SolicitudSerializer(serializers.ModelSerializer):
    class Meta:
        model = Solicitud
        fields = ['id', 'Tipo_solicitud']
