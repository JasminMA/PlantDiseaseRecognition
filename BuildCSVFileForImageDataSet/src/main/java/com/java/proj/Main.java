package com.java.proj;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import com.opencsv.CSVWriter;

public class Main {

	/*
	 * Thanks to
	 * https://www.geeksforgeeks.org/writing-a-csv-file-in-java-using-opencsv/
	 */
	public static void main(String[] args) throws Exception {
		if (args.length == 0) {
			throw new Exception("Image path doesn't exist");
		}
		File file = new File("test.csv");
		FileWriter outPutFile;
		try {
			DataConverter converter = new DataConverter();
			outPutFile = new FileWriter(file);
			CSVWriter csvWriter = new CSVWriter(outPutFile, ',', CSVWriter.NO_QUOTE_CHARACTER,
					CSVWriter.DEFAULT_ESCAPE_CHARACTER, CSVWriter.DEFAULT_LINE_END);
			List<String[]> data = new ArrayList<>();
			String dataPath = args[0];
			data.add(converter.getHeadersNames(dataPath));
			data.addAll(converter.getData(dataPath));
			csvWriter.writeAll(data);
			csvWriter.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
