from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import *
from .serializers import *


class ProductCategoryView(APIView):
    def get(self, request):
        categories = ProductCategory.objects.all()
        serializer = ProductCategorySerializer(categories, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ProductCategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
class ProductListView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductView(APIView):
    def get(self, request, pk):
        try:
            product = Product.objects.get(pk=pk)
        except Product.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        serializer = ProductSerializer(product)
        return Response(serializer.data)


class OrderView(APIView):
    def get(self, request, pk=None):
        try:
            order = Order.objects.get(pk=pk)
        except Order.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        serializer = OrderSerializer(order)
        return Response(serializer.data)
    
    def post(self, request, pk = None):
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk=None):
        try:
            order = Order.objects.get(pk=pk)
        except Order.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        order.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    def put(self, request, pk=None):
        try:
            order = Order.objects.get(pk=pk)
        except Order.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        
        serializer = OrderSerializer(order, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderListView(APIView):
    def get(self, request):
        orders = Order.objects.all()
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = OrderSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderItemListView(APIView):
    def get(self, request):
        order_items = OrderItem.objects.all()
        serializer = OrderItemSerializer(order_items, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = OrderItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
class OrderItemView(APIView):
    def get_object(self, pk=None):
        try:
            return OrderItem.objects.get(pk=pk)
        except OrderItem.DoesNotExist:
            return Response(status=status.HTTP_400_BAD_REQUEST)
    
    def get(self, request, pk=None):
        order_items = self.get_object(pk)
        serializer = OrderItemSerializer(order_items)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = OrderItemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk=None):
        order_item = self.get_object(pk)
        order_item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    def put(self, request, pk=None):
        order_item = self.get_object(pk)
        serializer = OrderItemSerializer(order_item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)