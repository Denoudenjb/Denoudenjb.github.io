import 'package:flutter/material.dart';
import 'images_page.dart';
import 'phonenumber_page.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: MainPage(),
    );
  }
}

class MainPage extends StatelessWidget {
  const MainPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Main Page'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: () {
                // Navigate to the events page
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) =>  const PhoneNumberList(),
                  ),
                );
              },
              child: const Text('View Calendar'),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                // Navigate to the images page
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => const ImagesPage(),
                  ),
                );
              },
              child: const Text('View Images'),
            ),
          ],
        ),
      ),
    );
  }
}
