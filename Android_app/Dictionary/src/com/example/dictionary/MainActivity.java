package com.example.dictionary;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;

import android.R.bool;
import android.app.ListActivity;

import android.os.Bundle;
import android.app.Activity;
import android.content.Context;
import android.content.DialogInterface;
import android.content.DialogInterface.OnMultiChoiceClickListener;
import android.content.Intent;
import android.graphics.Typeface;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.View;
import android.webkit.WebView;
import android.widget.AbsListView;
import android.widget.AbsListView.OnScrollListener;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ExpandableListView;
import android.widget.ListAdapter;
import android.widget.ListView;
import android.widget.RelativeLayout;
import android.widget.TextView;



public class MainActivity extends Activity implements
OnItemClickListener   {
	public final static String EXTRA_MESSAGE = "com.example.dictionary.Synonyms";
	 ArrayList<String> listItems=new ArrayList<String>();
     ArrayAdapter<String> adapter;
     InputStream inputreader; 
     BufferedReader buffreader;
     HashMap hm = new HashMap();
     private ListView mainListView ;
     private ListView mainListView1 ;
    // private ExpandListAdapter ExpAdapter;
    // private ArrayList<ExpandListGroup> ExpListItems;
    // private ExpandableListView ExpandList;
     
	@Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mainListView = (ListView) findViewById( R.id.list );
        
   	
        try {
			inputreader = getAssets().open("SynonymCSV.txt");
			buffreader = new BufferedReader(new InputStreamReader(inputreader));
		} catch (IOException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			return;
		}
        final Typeface typeBold = Typeface.createFromAsset(getAssets(),"fonts/arial.ttf");
        
        adapter=new ArrayAdapter<String>(this,
                R.layout.list,
                listItems);
       
        mainListView.setClickable(true);
        mainListView.setAdapter(adapter); 
        mainListView.setPadding(30, 0, 0, 0);
       
        try 
        {
        	String line=null;
		    String message = new String();
		    int count = 0;
		    //mainListView.setOnScrollListener(this);
		    line = buffreader.readLine();
		    while (count < 500 && line != null) {
		    	
		    	//message += line;
		        
		        String[] RowData = line.split(",");
		        TextView tvs = new TextView(this);
		        tvs.setTypeface(typeBold);
	            tvs.setText(RowData[0]);
		        listItems.add(tvs.getText().toString());
		        hm.put(RowData[0],RowData);
		        line = buffreader.readLine();
		        count++;
		    }
		   // buffreader.close();
		   
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
     
        mainListView.setChoiceMode(ListView.CHOICE_MODE_MULTIPLE);
        mainListView.setOnItemClickListener(new OnItemClickListener() {

         @Override
         public void onItemClick(AdapterView<?> arg0, View arg1, int arg2,
           long arg3) {

        	 Intent myIntent = new Intent(MainActivity.this, Synonyms.class);
	            myIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
	            String val = (String)mainListView.getItemAtPosition(arg2);
	            String[] row = (String[]) hm.get(val);
	            String synonyms = "";
	            for(int i = 0; i < row.length; i++)
	            {
	            	synonyms += row[i];
	            	synonyms +=",";
	            }
	            myIntent.putExtra(EXTRA_MESSAGE, synonyms);
	            startActivity(myIntent);
         }

        });
        
        mainListView.setOnScrollListener(new OnScrollListener() {
        	public void onItemClick(AdapterView<?> parent, View view, int position,
                    long id) {
                // 
            	  
        		Intent myIntent = new Intent(MainActivity.this, Synonyms.class);
    	            myIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
    	        //    String[] row = (String[]) hm.get(arg0);
    	          //  myIntent.putExtra(EXTRA_MESSAGE, row);
    	            startActivity(myIntent);
    	    
        		
            }

			@Override
			public void onScroll(AbsListView arg0, int arg1, int arg2, int arg3) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void onScrollStateChanged(AbsListView arg0, int scrollState) {
				// TODO Auto-generated method stub
				if ( scrollState == OnScrollListener.SCROLL_STATE_IDLE )
	            {
					int count = 0;
	        		while (count <= 500) 
	        		{
	        	        try 
	        	        {
	        				String line =buffreader.readLine();
	        				if(line == null)
	        				{
	        					buffreader.close();
	        					break;
	        				}
	        	        	//listItems.add(line);
	        	        	 String[] RowData = line.split(",");
	    			        listItems.add(RowData[0]);
	    			        hm.put(RowData[0],RowData);
	        			       
	        			} catch (IOException e) {
	        				// TODO Auto-generated catch block
	        				e.printStackTrace();
	        			}
	        	        count++;
	        	    };
	        	    //mainListView.setClickable(true);
	        	    
	        	    adapter.notifyDataSetChanged();
	        	    mainListView.invalidateViews();
	        	    
	            }
			}

        });

       
       
      
    }
	
    @Override
    public boolean onCreateOptionsMenu(Menu menu)
    {
        getMenuInflater().inflate(R.menu.activity_main, menu);
        return true;
    }
    @Override
    public void onItemClick(AdapterView<?> arg0, View arg1, int arg2, long arg3) {

    }

    
}
