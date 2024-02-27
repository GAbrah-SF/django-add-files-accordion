from django.db import models


# Create your models here.
class Cliente(models.Model):
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    email = models.CharField(max_length=40)
    rfc = models.CharField(max_length=13)
    created = models.DateField(auto_now_add=True)  # Se establece automáticamente en la fecha actual al crear el objeto
    updated = models.DateField(auto_now=True)  # Se actualiza a la fecha actual cada vez que se guarda el objeto

    class Meta:
        verbose_name_plural = "Clientes"

    def __str__(self):
        return f"{self.last_name} {self.first_name}"

    def __unicode__(self):
        return f"{self.last_name} {self.first_name}"


class Solicitud(models.Model):
    Tipo_solicitud = models.CharField(max_length=50)

