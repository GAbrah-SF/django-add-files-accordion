from django.urls import path
from .views import CreateCliente

urlpatterns = [
    path('guardar/', CreateCliente.as_view(), name='guardar'),
]
