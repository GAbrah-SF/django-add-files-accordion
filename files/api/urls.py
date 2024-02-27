from django.urls import path
from .views import CreateCliente, ObtenerSolicitud

urlpatterns = [
    path('guardar/', CreateCliente.as_view(), name='guardar'),
    path('mostrar_solicitud/', ObtenerSolicitud.as_view(), name='mostrar_solicitud'),
]
