import 'package:flutter/material.dart';

class ImagesPage extends StatelessWidget {
  const ImagesPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Images'),
      ),
      body: GridView.count(
        crossAxisCount: 2,
        children: [
          Image.asset('assets/images/image1.jpg'),
          Image.asset('assets/images/image2.jpg'),
          Image.asset('assets/images/image3.jpg'),
          Image.asset('assets/images/image4.jpg'),
          Image.asset('assets/images/image5.jpg'),
          Image.asset('assets/images/image6.jpg'),
        ],
      ),
    );
  }
}