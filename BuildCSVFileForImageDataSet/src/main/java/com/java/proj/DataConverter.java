package com.java.proj;

import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DataConverter {

	private Map<String, Integer> imageType = new HashMap<String, Integer>();

	public String[] getHeadersNames(String path) {
		List<String> headersAsList = new ArrayList<String>();
		headersAsList.add("image_id");
		File[] currentFiles = new File(path).listFiles();
		Arrays.stream(currentFiles).forEach(currentFile -> {
			if (currentFile.isDirectory()) {
				headersAsList.add(currentFile.getName());
				imageType.put(currentFile.getName(), imageType.size());
			}
		});
		System.out.println(headersAsList);
		System.out.println(imageType);
		return headersAsList.toArray(new String[headersAsList.size()]);
	}

	public void extractData(File file, List<String[]> data) {
		File[] currentFiles = file.listFiles();
		Arrays.stream(currentFiles).forEach(currentFile -> {
			if (currentFile.isDirectory()) {
				extractData(currentFile, data);
			} else {
				List<String> currentRow = new ArrayList<>();
				currentRow.add(currentFile.getName());
				String[] rowData = getCurrentRow(imageType.size(), imageType.get(currentFile.getParentFile().getName()));
				System.out.println("rowData : " + rowData);
				currentRow.addAll(Arrays.asList(rowData));
				data.add(currentRow.toArray(new String[currentRow.size()]));
			}
		});
	}

	static public String[] getCurrentRow(int rowSize, int imageTypeLocation) {
		String[] currentRow = new String[rowSize];
		Arrays.fill(currentRow, "0");
		currentRow[imageTypeLocation] = "1";
		return currentRow;
	}

	public List<String[]> getData(String path) {
		List<String[]> data = new ArrayList<>();
		File dataFile = new File(path);
		extractData(dataFile, data);
		return data;
	}

}
