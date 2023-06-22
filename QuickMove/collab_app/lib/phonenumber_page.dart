// ignore_for_file: library_private_types_in_public_api

import 'package:flutter/material.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:path_provider/path_provider.dart';
import 'package:mime_type/mime_type.dart';
import 'package:http/http.dart' as http;

class PhoneNumberList extends StatefulWidget {
  final String documentPath;

  const PhoneNumberList({super.key, required this.documentPath});

  @override
  _PhoneNumberListState createState() => _PhoneNumberListState();
}

class _PhoneNumberListState extends State<PhoneNumberList> {
  List<String> _phoneNumbers = [];

  @override
  void initState() {
    super.initState();
    _loadPhoneNumbers();
  }

  void _loadPhoneNumbers() async {
    String docContents;
    

    // Extract all the phone numbers from the document using a regular expression
    final phoneNumberRegex = RegExp(r'\b\d{3}[-.]?\d{3}[-.]?\d{4}\b');
    _phoneNumbers = docContents.split('\n').where((line) => phoneNumberRegex.hasMatch(line)).toList();

    // Set the state to update the list
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: _phoneNumbers.length,
      itemBuilder: (context, index) {
        return ListTile(
          title: Text(_phoneNumbers[index]),
        );
      },
    );
  }
}
