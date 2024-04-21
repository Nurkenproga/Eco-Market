from rest_framework import serializers

from .models import *


class ProductCategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=255)
    image = serializers.CharField(max_length=255)
    
    def create(self, validated_data):
        return ProductCategory.objects.create(
            name=validated_data.get('name'),
            image=validated_data.get('image')
        )
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.image = validated_data.get('image')
        instance.save()
        return instance
    
    
class OrderItemSerializer(serializers.Serializer):
    product = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all())
    
    quantity = serializers.IntegerField()
    
    def create(self, validated_data):
        return OrderItem.objects.create(
            product=validated_data.get('product'),
            quantity=validated_data.get('quantity')
        )
    
    def update(self, instance, validated_data):
        instance.product = validated_data.get('product')
        instance.quantity = validated_data.get('quantity')
        instance.save()
        return instance
    
    def delete(self, instance):
        instance.delete()
        
    
    
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
        
        
class OrderSerializer(serializers.ModelSerializer):
    products = serializers.PrimaryKeyRelatedField(queryset=OrderItem.objects.all(), many=True)
    
    
    # def create(self, validated_data):
    #     products = validated_data.pop('products')
    #     order = Order.objects.create(**validated_data)
    #     order.user = self.context['request'].user
    #     for product in products:
    #         order.products.add(product)
    #     return order
        
    
    class Meta:
        model = Order
        fields = '__all__'